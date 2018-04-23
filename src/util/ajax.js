import { Promise } from 'es6-promise'
import $ from 'jquery'

export default function(route, type, options = '', shouldStringify = true) {
  return new Promise((resolved, rejected) => {
    $.ajax({
      type: type,
      url: `https://jsonplaceholder.typicode.com${route}`,
      data: shouldStringify ? JSON.stringify(options) : options,
      success: (data) => {
        resolved(data)
      },
      error: (data) => {
        rejected(data)
      }
    });
  });
}

