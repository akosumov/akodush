import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
	apiKey: 'AIzaSyCw0widqYsVFTNV47kBWmnrKVGKrl_3CyY',

	authDomain: 'akoboard-2c66c.firebaseapp.com',

	projectId: 'akoboard-2c66c',

	storageBucket: 'akoboard-2c66c.appspot.com',

	messagingSenderId: '152127919489',

	appId: '1:152127919489:web:c17013501f8c37d61a0480',

	measurementId: 'G-KTCY2WE757',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

export { app, auth }
