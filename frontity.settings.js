const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://abodsblog.000webhostapp.com/",
      "title": "Abod's blog",
      "description": "A look into my brain 🧠"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Portfolio",
              "https://abodsakka.xyz/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://abodsblog.000webhostapp.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
