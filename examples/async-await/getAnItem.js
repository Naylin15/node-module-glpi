/* --------------------------------------------------------------------
*
*  LICENSE
*
*  This file is part of the GLPI API Client Library for Node.js,
*  a subproject of GLPI. GLPI is a free IT Asset Management.
*
*  GLPI is free software: you can redistribute it and/or
*  modify it under the terms of the GNU General Public License
*  as published by the Free Software Foundation; either version 3
*  of the License, or (at your option) any later version.
*
*  GLPI is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*  --------------------------------------------------------------------
*  @author    Gianfranco Manganiello - <gmanganiello@teclib.com>
*  @copyright (C) 2017 Teclib' and contributors.
*  @license   GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
*  @link      https://github.com/glpi-project/node-module-glpi
*  @link      http://www.glpi-project.org/
*  -------------------------------------------------------------------- */

const GlpiRestClient = require('../../lib/restclient')
const config = require('../../config.json')
const itemtype = require('../../lib/itemtype')
const GetAnItemQuery = require('../../lib/GetAnItemQuery');

(async () => {
    try {
        const client = new GlpiRestClient(config.apirest)
        let query = new GetAnItemQuery()
        query.with_networkports = true
        query.with_infocoms = true
        query.with_contracts = true
        query.with_documents = true
        await client.initSessionByCredentials(config.user.name, config.user.password, config.appToken)
        const Item = await client.getAnItem(itemtype.User, 40, query.createQueryObject())
        console.log(Item)
        await client.killSession()
    } catch (err) {
        console.log(err)
    }
})()
