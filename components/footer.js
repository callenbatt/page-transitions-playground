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

export default function Footer() {
  return (
    <>
      <footer className='flex h-24 w-full items-center justify-center border-t text-gray-400 font-light text-sm flex-col'>
        <p>
          Image source:{' '}
          <a href='https://unsplash.com' target='_blank' rel='noopener noreferrer'>
            https://unsplash.com/
          </a>
        </p>
        <p>
          Nutrition source:{' '}
          <a href='https://fdc.nal.usda.gov' target='_blank' rel='noopener noreferrer'>
            USDA
          </a>
        </p>
      </footer>
    </>
  )
}
