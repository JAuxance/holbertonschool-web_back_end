import ClassRoom from './0-classroom.js';

/**
 * Creates three `ClassRoom` instances with sizes 19, 20 and 34.
 * @returns {ClassRoom[]} The newly initialized classrooms.
 */
export default function initializeRooms() {
    return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}