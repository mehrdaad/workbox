/*
  Copyright 2017 Google Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

/**
 * The variable name that workbox-sw expects manifest entries to be assigned.
 * @type {String}
 */
const PRECACHE_MANIFEST_VAR = '__precacheManifest';

/**
 * Generates a template string from an array of manifest entries that can be
 * written to a manifest file.
 *
 * @function generateManifestWithWebpack
 * @param {Array<module:workbox-build.ManifestEntry>} manifestEntries
 * @return {Promise<string>} service worker manifest file string
 *
 * @memberof module:workbox-webpack-plugin
 */
module.exports = (manifestEntries) => {
  const entriesJson = JSON.stringify(manifestEntries, null, 2);
  return Promise.resolve(`self.${PRECACHE_MANIFEST_VAR} = ${entriesJson};`);
};
