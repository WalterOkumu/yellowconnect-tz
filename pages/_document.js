import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://static.mailerlite.com/js/w/webforms.min.js?v7316d10e2931a97c7b0f5c7e7e7be3ea"
          defer={false}
          id="element"
        >
        
            {function ml_webform_success_5786909(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-5786909 .row-success").show(),r(".ml-subscribe-form-5786909 .row-form").hide()}}
        </Script>
      </body>
    </Html>
  )
}