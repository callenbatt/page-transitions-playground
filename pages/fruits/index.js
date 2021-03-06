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

import ListItem from '../../components/list-item'
import { middleware } from '../../utils/middleware'

const Fruits = ({ data }) => {
  return (
    <div className={'flex-col items-center justify-center py-4 px-4'}>
      <h1 className='my-4 text-xl'>List of fruits</h1>

      <ul className='divide-y-2 divide-gray-100'>
        {data.items.map((item) => (
          <ListItem
            key={`f-${item.name}`}
            item={item}
            clientSideRouting={true}
            href={`/fruits/${item.name}`}
          />
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = middleware(async (ctx) => {
  const { req } = ctx
  const apiResponse = await fetch(`${req.hostWithProtocol}/api/fruits`)
  const data = await apiResponse.json()
  return {
    props: {
      data,
    },
  }
})

export default Fruits
