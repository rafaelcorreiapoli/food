import { Template } from 'meteor/templating';
import './home.html';

Template.homePage.onCreated(function() {
	this.subscribe('users');
});
