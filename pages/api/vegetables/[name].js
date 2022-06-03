/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { vegetables } from './index.js'

const map = {}
for (const item of vegetables) {
  const key = item.name
  map[key] = item
}

export default async function vegetable(req, res) {
  const { name } = req.query
  await new Promise((resolve) => setTimeout(resolve, 3000))
  if (map[name]) {
    res.status(200).json(map[name])
  } else {
    res.status(404).json({})
  }
}
