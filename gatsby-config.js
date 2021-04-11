/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// gatsby-config.js
module.exports = {
  /* Your site config here */
  
  plugins: ['gatsby-plugin-postcss'],
  plugins: [`gatsby-transformer-ffmpeg`],
  plugins: [`gatsby-plugin-fontawesome-css`],
  plugins: [
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, 
          disable: false, 
          selector: '[data-sal]',
          animateClassName: 'sal-animate', 
          disabledClassName: 'sal-disabled', 
          rootMargin: '0% 50%', 
          enterEventName: 'sal:in', 
          exitEventName: 'sal:out', 
      }
    }
  ]
  
  
}