/* eslint-disable */
// Text to Slug function
const slugify = (text) => {
    return text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
}

// Generate button styles taken from netlify
const buttonStyles = {
    boxSizing: 'border-box',
    fontSize: '14px',
    textDecoration: 'none',
    border: '0px',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: 'rgba(68, 74, 87, 0.15) 0px 4px 12px 0px, rgba(68, 74, 87, 0.25) 0px 1px 3px 0px',
    height: '36px',
    lineHeight: '36px',
    fontWeight: 500,
    backgroundColor: 'rgb(121, 130, 145)',
    color: 'rgb(255, 255, 255)',
    padding: '0px 30px',
    marginTop: '12px',
}

// Netlify CMS Custom Widget
const SlugsControl = createClass({
    handleChange: function (e) {
        this.props.onChange(slugify(e.target.value.trim()))
    },

    handleGenerate: function (e) {
        const textinput = document.querySelector('[id*=field-1]')

        this.props.onChange(slugify(textinput.value))
    },

    render() {
        return h('div', null, [
            h('input', {
                id: this.props.forID,
                ref: 'slugify',
                className: this.props.classNameWrapper,
                type: 'text',
                value: this.props.value,
                onChange: this.handleChange,
            }),
            h(
                'button',
                { style: buttonStyles, onClick: this.handleGenerate, name: 'Click me' },
                'Generate Slug'
            ),
        ])
    },
})

// Register the widget
CMS.registerWidget('slugify', SlugsControl)