import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'


const Head = (props) => (
  <Helmet>
    <title>SkillCrucial Boilerplate - {props.title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FF0000" />
  </Helmet>
)

// const Header = (props) => (
//     <Helmet>
//       <div className="bg-green-200 h-screen">
//       <div className="flex border-2 border-dotted justify-between border-green-700 pt-2 pb-3 m-h-screen">
//         <div id="brand-name" className="px-5 text-lg font-mono">
//           <button type='button' onClick={() => {
//           <Link to="/main"/>}}>Main - {props.title}</button>
//         </div>
//         <div id="order-count" className="flex px-16 font-mono ">
//           <button type='button' onClick={() => {
//           <Link to="/basket"/>}}>Basket - {props.title}</button>
//         </div>
//       </div>
//     </div>
//     </Helmet>
// )

// Header.propTypes = {
//    title: PropTypes.string
// }
// Header.defaultProps = {
//   title: 'skillcrucial.com'
// }

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: 'skillcrucial.com'
}
export default Head

