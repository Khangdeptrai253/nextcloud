<?php
/**
 * @copyright Copyright (c) 2016 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author Ryan Fletcher <ryan.fletcher@codepassion.ca>
 *
 * @license GNU AGPL version 3 or any later version
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 *  published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

return [
	'routes' => [
		['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],
		
		// IntellectualPropertyRoute
		['name' => 'intellectual_property#index', 'url' => '/index-intellectual-property', 'verb' => 'GET'],
		['name' => 'intellectual_property#findById', 'url' => '/index-intellectual-property/{id}', 'verb' => 'GET'],
		['name' => 'intellectual_property#create', 'url' => '/create-intellectual-property', 'verb' => 'POST'],
		['name' => 'intellectual_property#update', 'url' => '/update-intellectual-property', 'verb' => 'PUT'],
		['name' => 'intellectual_property#delete', 'url' => '/delete-intellectual-property', 'verb' => 'PUT'],

		// GroupRoute
		['name' => 'group#getGroupUserByGroupId', 'url' => '/get-group-user-detail/{gid}', 'verb' => 'GET'],
	],
];