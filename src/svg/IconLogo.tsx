import React from 'react'
interface IProps {
    style?: React.CSSProperties,
    className?: string
}

const IconLogo: React.FC<IProps> = ({ className = "", style }) => {
    return (
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
            <circle cx="250" cy="250" r="230" stroke="#FF006E" strokeWidth="10" />
            <path fillRule="evenodd" clipRule="evenodd" d="M337.846 289.952C335.032 303.757 322.774 314.148 308.08 314.148C291.304 314.148 277.705 300.606 277.705 283.902C277.705 267.198 291.304 253.657 308.08 253.657C324.855 253.657 338.454 267.198 338.454 283.902C338.454 285.164 338.377 286.408 338.226 287.629L361.449 275.481C371.255 270.352 378.267 260.582 379.482 248.931L391.225 136.237L299.063 190.918C290.35 196.087 284.643 204.691 282.966 214.213L281.275 223.817L271.631 222.367C265.688 221.473 259.335 221.01 252.579 221.01C244.89 221.01 237.577 221.402 230.683 222.202L223.263 223.063L220.332 216.193C216.731 207.751 209.771 200.846 200.568 197.538L92.4055 158.657L119.904 268.436C123.569 283.067 136.287 293.218 150.773 294.1L159.4 294.626L160.13 303.238C164.439 354.101 207.294 394.116 259.588 394.116C261.263 394.116 262.906 394.085 264.517 394.025L264.947 394.009L265.376 394.03C266.554 394.087 267.74 394.116 268.934 394.116C288.841 394.116 319.639 383.147 345.832 366.072C358.767 357.639 370.005 348.077 377.902 338.288L377.959 338.217C375.967 338.71 373.884 338.971 371.74 338.971C357.546 338.971 346.039 327.513 346.039 313.379C346.039 305.008 350.075 297.576 356.315 292.907L337.846 289.952ZM380.971 297.07C378.804 296.537 376.324 296.087 373.343 295.604C371.968 296.02 370.681 296.687 369.547 297.57C369.382 297.698 369.22 297.831 369.062 297.968C367.409 299.405 368.094 301.892 369.986 302.991L377.182 307.168L384.318 311.045C385.759 311.827 387.609 311.311 388.033 309.729C388.172 309.21 388.275 308.68 388.341 308.144C388.527 306.628 388.411 305.09 388 303.618C387.59 302.146 386.892 300.769 385.947 299.566C385.574 299.091 385.165 298.647 384.725 298.237C383.788 297.856 382.57 297.464 380.971 297.07ZM389.428 249.967C388.371 260.103 383.925 269.134 377.282 275.981C375.373 277.948 373.284 279.735 371.042 281.316C369.462 282.43 367.806 283.442 366.084 284.342C367.597 284.584 369.058 284.81 370.467 285.029C374.131 285.596 377.446 286.109 380.415 286.706C393.415 289.323 399.778 293.56 399.778 311.052C399.778 356.025 314.099 404.116 268.934 404.116C267.579 404.116 266.231 404.083 264.891 404.018C263.152 404.083 261.384 404.116 259.588 404.116C202.09 404.116 154.913 360.114 150.165 304.082C131.417 302.94 114.951 289.816 110.204 270.866L80.8845 153.818C79.7183 149.162 84.2203 145.088 88.7368 146.711L203.951 188.127C215.865 192.41 224.878 201.363 229.53 212.268C236.853 211.419 244.554 211.01 252.579 211.01C259.791 211.01 266.643 211.505 273.118 212.478C275.287 200.163 282.673 189.015 293.961 182.317L392.956 123.583C397.199 121.065 402.506 124.464 401.995 129.372L389.428 249.967ZM319.889 283.126C321.33 283.908 323.18 283.392 323.604 281.81C323.743 281.291 323.846 280.761 323.912 280.225C324.098 278.709 323.982 277.171 323.571 275.699C323.161 274.227 322.463 272.85 321.517 271.647C320.572 270.443 319.398 269.437 318.063 268.686C316.727 267.934 315.256 267.452 313.733 267.267C312.21 267.081 310.665 267.196 309.187 267.605C307.709 268.014 306.326 268.709 305.118 269.651C304.953 269.779 304.791 269.912 304.633 270.049C302.98 271.486 303.665 273.973 305.557 275.072L312.753 279.249L319.889 283.126ZM249.667 288.555C249.667 305.259 236.068 318.801 219.293 318.801C202.517 318.801 188.918 305.259 188.918 288.555C188.918 271.851 202.517 258.31 219.293 258.31C236.068 258.31 249.667 271.851 249.667 288.555ZM230.109 283.126C231.55 283.908 233.4 283.392 233.824 281.81C233.963 281.291 234.066 280.761 234.132 280.225C234.318 278.709 234.202 277.171 233.792 275.699C233.381 274.227 232.683 272.85 231.738 271.647C230.792 270.443 229.619 269.437 228.283 268.686C226.947 267.934 225.476 267.452 223.953 267.267C222.43 267.081 220.886 267.196 219.408 267.605C217.929 268.015 216.547 268.709 215.338 269.651C215.173 269.779 215.011 269.912 214.854 270.049C213.2 271.486 213.885 273.973 215.778 275.072L222.973 279.249L230.109 283.126Z" fill="#FF006E" />
        </svg>
    )
}

export default IconLogo
