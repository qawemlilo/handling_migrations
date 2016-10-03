"use strict";

module.exports = {
  id: {type: 'increments', nullable: false, primary: true},
  name: {type: 'string', maxlength: 250, nullable: false}
};
