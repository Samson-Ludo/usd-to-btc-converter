# USD to BTC Converter Widget

A simple widget that converts USD to BTC using the CoinGecko API, built with Next.js, TypeScript, and Tailwind CSS. The widget displays the current BTC price, allows users to input a USD value, and shows the converted BTC amount along with the last updated timestamp.

## Features

- Fetches the current Bitcoin price in USD from the [CoinGecko API](https://www.coingecko.com/en/api/documentation).
- Allows users to input any USD amount up to a maximum of $100,000,000.
- Displays the converted BTC amount based on the current price.
- Shows the last updated timestamp when the price was fetched.
- Simple and responsive UI built with Tailwind CSS.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Samson-Ludo/usd-to-btc-converter.git
   cd usd-to-btc-converter
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. Upon loading, the widget will display the current Bitcoin price in USD along with the last updated timestamp.
2. Enter a USD amount (up to $100,000,000) in the input field.
3. The converted BTC amount will automatically be displayed based on the entered USD value.

## Project Structure

```bash
├── components
│   └── BTCConverter.tsx   # Main converter component
├── lib
│   └── fetchPrice.ts      # Function to fetch BTC price from CoinGecko API
├── pages
│   └── index.tsx          # Main page displaying the converter widget
├── public
│   └── screenshot.png     # (Optional) Screenshot of the widget
├── styles
│   └── globals.css        # Tailwind CSS setup
└── README.md              # Project documentation
```

## API Reference

This project uses the [CoinGecko Simple Price API](https://www.coingecko.com/en/api/documentation). No API key is required for this endpoint.

- **Endpoint:** `https://api.coingecko.com/api/v3/simple/price`
- **Parameters:** `ids=bitcoin&vs_currencies=usd`
- **Response:**
  ```json
  {
    "bitcoin": {
      "usd": 50000
    }
  }
  ```

## Dependencies

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/docs/intro)

## Development

To modify the widget or add new features, simply edit the `BTCConverter.tsx` component or modify the API call in `fetchPrice.ts`.

## Author

[Samson Okaludo](https://linkedin.com/in/samson-okaludo)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

