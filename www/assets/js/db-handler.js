/*
  Copyright 2026 Andrew Franqueira

  This file is part of Waistline.

  Waistline is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  Waistline is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with Waistline.  If not, see <http://www.gnu.org/licenses/>.
*/

var dbHandler = {};
dbHandler._impl = null; // assigned once, during deviceready, once initialization/migration decides the backend

function toPromise(requestOrPromise) {
  if (requestOrPromise instanceof Promise) return requestOrPromise;
  return new Promise((resolve, reject) => {
    requestOrPromise.addEventListener("success", (e) => resolve(e.target.result));
    requestOrPromise.addEventListener("error", (e) => reject(e));
  });
}

dbHandler.get                 = (...args) => dbHandler._impl.get(...args);
dbHandler.put                 = (...args) => toPromise(dbHandler._impl.put(...args));
dbHandler.deleteItem          = (...args) => toPromise(dbHandler._impl.deleteItem(...args));
dbHandler.getFirstNonArchived = (...args) => dbHandler._impl.getFirstNonArchived(...args);
dbHandler.getByKey            = (...args) => dbHandler._impl.getByKey(...args);
dbHandler.getByMultipleKeys   = (...args) => dbHandler._impl.getByMultipleKeys(...args);
dbHandler.getIndexSorted      = (...args) => dbHandler._impl.getIndexSorted(...args);
dbHandler.processItems        = (...args) => dbHandler._impl.processItems(...args);
dbHandler.export              = (...args) => dbHandler._impl.export(...args);
dbHandler.import              = (...args) => dbHandler._impl.import(...args);