import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Tule Simon - Android & Flutter Dev" />
          <meta name="description" content="Hey there, This is Tule Simon. I am an Android & Flutter developer, Full stack Web developer" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Tule Simon - Android & Flutter Dev" />
          <meta property="og:description" content="Hey there, This is Tule Simon. I am an Android & Flutter developer, Full stack Web developer." />
          <meta property="og:image" content="https://scontent.flos2-2.fna.fbcdn.net/v/t39.30808-6/269870982_605399537459130_4625501269340018997_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFQKbMcSslcM6xBNeHHsexg886cUBsEW7zzzpxQGwRbvAfZItkWlkY1_PSFvJBk4LifxWhQBPGUBlUHPzsnJ0ev&_nc_ohc=o361tJvKpDEAX_zT4IT&_nc_zt=23&_nc_ht=scontent.flos2-2.fna&oh=00_AT-hxu8dSGDSf0n9vqa9ruZWqffHl3ZEWip-6CObsOBhqw&oe=61C9BC3C" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Tule Simon - Android & Flutter Dev" />
          <meta property="twitter:description" content="Hey there, This is Tule Simon. I am an Android & Flutter developer, Full stack Web developer" />
          <meta property="twitter:image" content="https://scontent.flos2-2.fna.fbcdn.net/v/t39.30808-6/269870982_605399537459130_4625501269340018997_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFQKbMcSslcM6xBNeHHsexg886cUBsEW7zzzpxQGwRbvAfZItkWlkY1_PSFvJBk4LifxWhQBPGUBlUHPzsnJ0ev&_nc_ohc=o361tJvKpDEAX_zT4IT&_nc_zt=23&_nc_ht=scontent.flos2-2.fna&oh=00_AT-hxu8dSGDSf0n9vqa9ruZWqffHl3ZEWip-6CObsOBhqw&oe=61C9BC3C" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
