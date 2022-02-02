import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class myDocument extends Document {
  render() {
    return (
      <Html lang="en-CA">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
