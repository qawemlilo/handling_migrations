"use strict";

module.exports = {
  id: {type: 'increments', nullable: false, primary: true},
  user_id: {type: 'integer', nullable: false, unsigned: true},
  category_id: {type: 'integer', nullable: false, unsigned: true},
  title: {type: 'string', maxlength: 200, nullable: false},
  slug: {type: 'string', maxlength: 250, nullable: false, unique: true},
  html: {type: 'text', fieldtype: 'medium', nullable: false}
};
