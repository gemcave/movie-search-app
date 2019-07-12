import React from "react";
import styled from "styled-components";
import rem from "../helpers/rem";

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin-bottom: ${rem(150)};
`;

const StyledLoaderText = styled.div`
  color: var(--color-white);
  font-size: ${rem(20)};
  font-weight: var(--font-black);
  margin-top: ${rem(8)};
  text-transform: uppercase;
`;
const Loader = () => {
  return (
    <StyledLoader>
      <svg
        width="134"
        height="107"
        viewBox="0 0 134 107"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Group 4</title>
        <g fill="none" fillRule="evenodd">
          <path
            d="M74.053 40.274c1.546-.652 3.579-2.57 3.319-8.166-.151-3.258-2.339-6.072-5.715-7.372a6.886 6.886 0 0 0 .827-3.254c0-4.496-4.444-8.14-9.927-8.14-1.856 0-3.593.419-5.079 1.146-.982-3.104-4.14-5.488-8.06-5.992-.475-4.133-4.717-7.368-9.881-7.368-5.483 0-9.927 3.645-9.927 8.14 0 .04.003.08.004.12-3.191.708-5.744 2.687-6.802 5.234a11.963 11.963 0 0 0-2.263-.215c-5.482 0-9.927 3.644-9.927 8.14 0 .612.085 1.206.242 1.78-5.394.084-9.735 3.693-9.735 8.136 0 4.249.49 5.714 3.591 7.776a2.472 2.472 0 0 0-2.313 2.466v1.758a2.475 2.475 0 0 0 2.475 2.475h2.294l8.148 58.136h47.833l8.148-58.136h2.294a2.475 2.475 0 0 0 2.475-2.475v-1.758a2.474 2.474 0 0 0-2.021-2.431"
            fill="#FFF"
          />
          <path
            d="M129.575 51.492h-21.139V16.66l11.048-10.147-5.144-4.725-13.17 12.098.007.006h-.015v37.599h-21.65a2.474 2.474 0 0 0-2.474 2.474v2.059a2.474 2.474 0 0 0 2.474 2.474h1.087l6.085 46.43h35.72l6.085-46.43h1.086a2.474 2.474 0 0 0 2.474-2.474v-2.06a2.474 2.474 0 0 0-2.474-2.473"
            fill="#FFF"
          />
          <path
            d="M74.945 44.463c0 .742-.604 1.346-1.346 1.346H4.881a1.348 1.348 0 0 1-1.346-1.346v-1.758c0-.601.4-1.106.945-1.278.07.044.132.088.204.133l.275.173h67.523c.284 0 .891-.035 1.616-.275.495.198.847.68.847 1.247v1.758zm-12.77 59.483h-5.264l1.224-9.931 4.447-35.1a1.11 1.11 0 0 0-.059-.515l1.274-10.334h6.211l-7.833 55.88zM48.56 99.03h6.682l-.605 4.915H48.19l.37-4.915zm-8.19 0h5.927l-.37 4.915h-5.558V99.03zm-16.23 4.915l-.605-4.915h6.682l.371 4.915H24.14zm2.236-55.88l.722 9.579h-8.662l-1.18-9.58h9.12zm11.736 9.579h-8.75l-.723-9.58h9.473v9.58zm11.304 0H40.37v-9.58h9.77l-.723 9.58zm10.926 0H51.68l.723-9.58h9.12l-1.18 9.58zm-.16 2.257l-4.287 33.835-.385 3.037H23.257l-1.08-8.764-3.463-28.108h41.468zm-22.07 44.044h-5.26l-.37-4.915h5.63v4.915zm-21.807 0l-7.832-55.88h6.508l3.373 27.378 2.784 22.597h.001l.727 5.905h-5.56zM2.257 32.463c0-3.79 3.87-6.934 8.624-7.008l1.453-.023-.382-1.402a5.666 5.666 0 0 1-.2-1.483c0-3.866 3.945-7.012 8.797-7.012.685 0 1.375.066 2.051.195l.902.173.352-.848c.926-2.231 3.171-3.937 6.004-4.564l.901-.2-.02-1.022c0-3.867 3.946-7.012 8.798-7.012 4.502 0 8.35 2.797 8.76 6.368l.101.878.876.112c3.47.446 6.267 2.493 7.128 5.214l.394 1.249 1.177-.576c1.38-.675 2.965-1.032 4.584-1.032 4.852 0 8.8 3.146 8.8 7.013 0 .94-.235 1.857-.696 2.723l-.599 1.126 1.19.458c2.95 1.135 4.863 3.576 4.993 6.37.138 2.992-.41 5.195-1.588 6.369a3.274 3.274 0 0 1-.792.586c-.088-.006-.176-.013-.266-.013H5.05c-2.402-1.644-2.792-2.784-2.792-6.64zm74.945 12v-1.758c0-.975-.39-1.86-1.023-2.51l.016-.013c1.702-1.653 2.478-4.387 2.305-8.126-.155-3.338-2.175-6.275-5.356-7.892a7.89 7.89 0 0 0 .47-2.681c0-5.112-4.96-9.27-11.057-9.27-1.543 0-3.064.27-4.464.787-1.35-2.755-4.215-4.81-7.699-5.49C49.412 3.174 44.914 0 39.537 0c-5.79 0-10.554 3.75-11.018 8.507-2.824.833-5.116 2.59-6.36 4.87-.535-.065-1.074-.1-1.61-.1-6.096 0-11.055 4.16-11.055 9.27 0 .245.012.49.035.735C4.09 23.897 0 27.737 0 32.462c0 3.748.387 5.645 2.523 7.525a3.592 3.592 0 0 0-1.245 2.718v1.758a3.607 3.607 0 0 0 3.603 3.603h1.313l8.15 58.137h49.794l8.15-58.137h1.311a3.607 3.607 0 0 0 3.603-3.603z"
            fill="#0E0E41"
          />
          <path
            d="M17.265 26.222c2.755 0 5.061 1.66 5.584 3.855-.047.31-.07.626-.07.947 0 .623.505 1.128 1.128 1.128h.183c.622 0 1.128-.505 1.128-1.128 0-.32-.024-.637-.072-.947.523-2.196 2.828-3.855 5.585-3.855a1.129 1.129 0 0 0 0-2.257c-2.833 0-5.324 1.321-6.734 3.306-1.409-1.985-3.9-3.306-6.732-3.306a1.128 1.128 0 1 0 0 2.257"
            fill="#0E0E41"
          />
          <path
            d="M45.487 32.494c-1.409-1.985-3.9-3.306-6.733-3.306a1.128 1.128 0 1 0 0 2.257c2.756 0 5.062 1.659 5.585 3.856a6.289 6.289 0 0 0-.072.946c0 .623.506 1.128 1.13 1.128h.181c.624 0 1.13-.505 1.13-1.128 0-.321-.026-.637-.073-.946.523-2.197 2.83-3.856 5.586-3.856a1.128 1.128 0 0 0 0-2.257c-2.833 0-5.325 1.32-6.734 3.306"
            fill="#0E0E41"
          />
          <path
            d="M52.221 23.778c2.756 0 5.062 1.659 5.585 3.855-.047.31-.071.626-.071.947 0 .623.505 1.128 1.128 1.128h.182c.624 0 1.129-.505 1.129-1.128 0-.321-.024-.637-.071-.947.522-2.196 2.828-3.855 5.585-3.855a1.129 1.129 0 0 0 0-2.257c-2.833 0-5.324 1.32-6.734 3.306-1.409-1.985-3.9-3.306-6.733-3.306a1.128 1.128 0 1 0 0 2.257"
            fill="#0E0E41"
          />
          <path
            d="M33.394 14.837c2.757 0 5.062 1.66 5.585 3.856-.046.31-.071.625-.071.946 0 .623.505 1.13 1.129 1.13h.182a1.13 1.13 0 0 0 1.129-1.13c0-.32-.025-.636-.072-.946.523-2.196 2.828-3.856 5.585-3.856a1.128 1.128 0 1 0 0-2.257c-2.832 0-5.324 1.321-6.733 3.306-1.41-1.985-3.901-3.306-6.734-3.306a1.128 1.128 0 0 0 0 2.257"
            fill="#0E0E41"
          />
          <path
            d="M130.92 56.024c0 .742-.603 1.346-1.345 1.346H79.513a1.348 1.348 0 0 1-1.346-1.346v-2.059c0-.74.604-1.345 1.346-1.345h50.062c.742 0 1.346.604 1.346 1.345v2.06zm-9.507 47.775h-3.363l5.092-44.172h4.06l-5.79 44.172zm-9.55-4.768h4.465l-.55 4.768h-4.251l.337-4.768zm-6.191 0h3.93l-.337 4.768h-3.593v-4.768zM93.53 103.8l-.55-4.768h4.464l.337 4.768H93.53zm1.137-44.172l.407 5.784h-5.968l-.667-5.784h6.228zm8.748 5.784h-6.078l-.408-5.784h6.486v5.784zm8.556 0h-6.3v-5.784h6.708l-.408 5.784zm8.23 0h-5.968l.409-5.784h6.227l-.667 5.784zM89.368 67.67h30.576l-1.017 8.826-2.338 20.28H92.72l-3.355-29.106zm14.049 36.13h-3.372l-.336-4.768h3.708v4.768zm-15.741 0l-5.79-44.172h4.283l.81 7.042 1.567 13.586 2.714 23.544h-3.584zm14.616-53.437h5.017V20.836h-5.017v29.526zm3.28-38.986l3.387 3.273-.772.71-4.914-1.87 2.3-2.113zm8.77-8.055l3.475 3.192-7.192 6.606-3.387-3.273 7.104-6.525zM102.29 15.53l5.017 1.91v1.141h-5.017v-3.05zm27.284 34.834h-20.01V17.158l10.682-9.814a1.127 1.127 0 0 0 0-1.662L115.104.958a1.128 1.128 0 0 0-1.527 0L100.43 13.033c-.012.011-.021.024-.033.035a1 1 0 0 0-.154.176 1.12 1.12 0 0 0-.117.208c-.006.013-.014.025-.02.04-.01.026-.013.053-.021.08a1.056 1.056 0 0 0-.028.103c-.01.051-.014.103-.017.157-.001.02-.007.04-.007.061v36.47H79.513a3.606 3.606 0 0 0-3.603 3.602v2.06a3.607 3.607 0 0 0 3.603 3.602h.096l6.085 46.43h37.7l6.085-46.43h.096a3.607 3.607 0 0 0 3.603-3.603v-2.059a3.606 3.606 0 0 0-3.603-3.602z"
            fill="#0E0E41"
          />
          <text
            fontFamily="Roboto-Black, Roboto"
            fontSize="20"
            fontWeight="700"
            letterSpacing=".188"
            fill="#0E0E41"
            transform="translate(0 -1)"
          >
            <tspan x="26" y="83">
              &lt;/&gt;
            </tspan>
          </text>
          <text
            fontFamily="Roboto-Black, Roboto"
            fontSize="18"
            fontWeight="700"
            letterSpacing=".169"
            fill="#0E0E41"
            transform="translate(0 -1)"
          >
            <tspan x="98" y="85">
              {}
            </tspan>
          </text>
        </g>
      </svg>
      <StyledLoaderText className="c-loader__text">Movie App</StyledLoaderText>
    </StyledLoader>
  );
};

export default Loader;
