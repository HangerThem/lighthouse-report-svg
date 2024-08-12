![GitHub Repo Size](https://img.shields.io/github/repo-size/hangerthem/lighthouse-report-svg)
![GitHub Issues](https://img.shields.io/github/issues/hangerthem/lighthouse-report-svg)
![GitHub Stars](https://img.shields.io/github/stars/hangerthem/lighthouse-report-svg)
![GitHub Forks](https://img.shields.io/github/forks/hangerthem/lighthouse-report-svg)
![GitHub license](https://img.shields.io/github/license/HangerThem/lighthouse-report-svg)
![GitHub last commit](https://img.shields.io/github/last-commit/HangerThem/lighthouse-report-svg)
![CodeFactor Grade](https://www.codefactor.io/repository/github/HangerThem/lighthouse-report-svg/badge)

# Lighthouse Report SVG Embed

**Lighthouse Report SVG Embed** is a tool that helps you display Lighthouse reports in a visually appealing way directly on your site, README, or other documentation. This tool was created to provide a simple and effective way to embed performance and audit reports without needing a separate installation.

## Overview

When looking to embed Lighthouse reports into a README or other documents, there wasn't an easy solution available. This tool fills that gap by offering a straightforward way to generate and embed SVG reports from Lighthouse metrics. Simply use the provided URL syntax to customize and display your report.

## Features

- **No Installation Required:** Deployed on Vercel, so you can use it directly via URL.
- **Customizable SVG Reports:** Adjust performance, accessibility, best practices, SEO, and PWA metrics through URL parameters.
- **Easy Integration:** Use the URL as an image source in markdown files, similar to other badges.

## Preview

![Lighthouse Report](https://lighthouse-report-svg.vercel.app/?perf=85&acc=90&best=80&seo=70&pwa=3)

## Usage

To embed a Lighthouse report SVG, use the following URL format:

```
https://lighthouse-report-svg.vercel.app/?perf=100&acc=40&best=30&seo=58&pwa=4
```

### Parameters

- `perf` (Performance): A value between 0 and 100.
- `acc` (Accessibility): A value between 0 and 100.
- `best` (Best Practices): A value between 0 and 100.
- `seo` (SEO): A value between 0 and 100.
- `pwa` (Progressive Web App):
  - `0` - No badges
  - `1` - Just fast and reliable
  - `2` - Just installable
  - `3` - Fast and reliable and installable
  - `4` - Full PWA

Example of embedding the SVG in a markdown file:

```markdown
![Lighthouse Report](https://lighthouse-report-svg.vercel.app/?perf=85&acc=90&best=80&seo=70&pwa=3)
```

## Customization

You can customize the report by modifying the URL parameters. Each parameter directly affects the SVG output, allowing you to tailor the report to reflect your specific metrics.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Submit a pull request with a detailed description of your changes.

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT) when contributing.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For questions or support, please reach out to [f.borisjuk@hangerthem.com](mailto:f.borisjuk@hangerthem.com).

## Acknowledgements

This tool leverages the capabilities of Vercel for deployment and showcases the versatility of Lighthouse metrics.
