"use strict";

module.exports = {
  id: {type: 'increments', nullable: false, primary: true},
  slug: {type: 'string', maxlength: 150, nullable: false, unique: true},
  name: {type: 'string', maxlength: 150, nullable: false}
};
