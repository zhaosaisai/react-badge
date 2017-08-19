import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import './assets/badge.css'

const noop = () => {}

const DotCount = (props) => {
    const {count, maxCount, showAsDot, showZero, clear} = props
    
    const element = () => {
        if(showAsDot) {
            return <i className="v-badge-count v-badge-dot" onClick={clear}></i>
        }else{
            let num = count > maxCount ? `${maxCount}+` : count
            if(count > 0 || (count === 0 && showZero) ) {
                return <i className="v-badge-count" onClick={clear}>
                    {num}
                </i>
            }
        }
    }

    return element()
}

export default class Badge extends Component {
    static propTypes = {
        count: PropTypes.number,
        maxCount: PropTypes.number,
        showAsDot: PropTypes.bool,
        showZero: PropTypes.bool,
        classNames: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]),
        children: PropTypes.node,
        clickToClear: PropTypes.func,
        clearable: PropTypes.bool
    }

    static defaultProps = {
        count: 0,
        maxCount: 99,
        showAsDot: false,
        showZero: true,
        classNames: '',
        clickToClear: noop,
        clearable: true
    }

    constructor(props) {
        super(props)
        this.state = {
            clear: false
        }
    }

    handleToClear() {
        const {clearable, clickToClear} = this.props
        if(clearable || clickToClear !== noop) {
            this.setState({
                clear: true
            }, () => {
                clickToClear()
            })
        }
    }

    render() {
        const {children, classNames, clickToClear} = this.props
        const cls = cx('v-badge', {
            classNames
        })

        return (
            <div className={cls}>
                {children}
                {!this.state.clear && <DotCount clear={this.handleToClear.bind(this)} {...this.props}/>}
            </div>
        )
    }
}