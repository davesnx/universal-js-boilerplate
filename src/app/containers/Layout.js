import React, { Component, PropTypes } from 'react'

class Layout extends Component {

  render() {
    return (
    <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <title>{ this.props.title }</title>
          <meta name='description' content='' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='stylesheet' href='/app.css' type='text/css' />
          <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        </head>
        <body>
          { this.props.children }
          <script src='/app.js'></script>
        </body>
      </html>
    )
  }
}

export default Layout
