/*Get About Page */
module.exports = {
  about: (req,res) => {
    res.render('about', {title: 'About'})
  }
}