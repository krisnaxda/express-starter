const passport = require('passport')
const LocalStrategy= require('passport-local').Strategy
const Admin = require('../models/admin')

passport.use(new LocalStrategy((username, password, done) => {
	Admin.findOne({ username })
	.then(user => {
		if (!user) {
			return done(null, false)
		}

		if(!isMatch) {
			return done(null, false)
		}

		return done(null, user)
	}).catch(err => done(err))
}))

passport.serializeUser((user, done) => {
	done(null, admin.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id)
	.then(user => done(null, user))
	.catch(err => done(err))
})

module.exports = passport
