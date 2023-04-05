function createBadge() {
        var brand = document.createElement("a");
        brand.setAttribute("class", "w-webflow-badge");
        brand.setAttribute("href", "https://www.youtube.com/c/codeopacity?sub_confirmation=1");

        var logoArt = document.createElement("img");
        logoArt.setAttribute(
          "src",
          "https://yt3.ggpht.com/UWcWk3P99Y1JpZuVY872VMAE5iuM3Q2fQQfeI5RixpNpQ44bMzpZgh2LEM5d5KOIePOh0sWSVAo=s48-c-k-c0x00ffffff-no-rj"
        );
        logoArt.setAttribute("alt", "");
        logoArt.setAttribute("class", "logo");
        // logoArt.style.marginRight = "8px";
        // logoArt.style.width = "16px";

        var logoText = document.createElement("img");
        logoText.setAttribute(
          "src",
          "https://raw.githubusercontent.com/itsrehanraihan/images_cdn/main/Saved%20Pictures/Subscribe!.svg"
        );
        logoText.setAttribute("alt", "Made by codeopacity");
        logoText.setAttribute("class", "logo-text");

        //Style

        let style = document.createElement('style');   



        style.innerHTML = `
        .w-webflow-badge {
            position: fixed;
            text-align: center;
            bottom: 48px;
            left: 46%;
            display: flex;
            align-items: center;
            border: .55px solid #ddd;
            border-radius: 4px;
            padding: 4px 8px 4px 4px;
            gap: 8px;
            animation: scale 1.2s linear;
        }
        @keyframes scale {
            from {
                opacity: 0;
                transform: scale(.5);
            }
            to{
                opacity: 1;
                transform: scale(1);
            }
        }
        .w-webflow-badge > img {
            max-height: 16px;
            width: auto;

        }
        .w-webflow-badge img.logo {
            aspect-ratio: 1/1;
            border-radius: 4px;
            overflow:hidden;
        }
        .w-webflow-badge img.logo-text {
            height: 12px;
        }
        `;
        document.head.appendChild(style);

        brand.appendChild(logoArt);
        brand.appendChild(logoText);

        return brand;
      }
document.body.append(createBadge());
