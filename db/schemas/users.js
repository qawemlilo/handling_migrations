"use strict";

module.exports = {
  id: {type: 'increments', nullable: false, primary: true},
  email: {type: 'string', maxlength: 250, nullable: false, unique: true},
  name: {type: 'string', maxlength: 250, nullable: false}
};
