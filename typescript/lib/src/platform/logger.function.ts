import { bgGreen, white } from 'kolorist';
import type { TaskMetadata } from './task-resources.type.js';

/**
 * Represents a logger function.
 * @param {string} message The message to be logged.
 */
export type Logger = (message: string) => void;

/**
 * Creates a logger function with the provided task metadata.
 * @param {TaskMetadata} metadata The metadata of the task.
 * @returns {Logger} A logger function that logs messages with the task metadata.
 */
export const createLogger = (metadata: TaskMetadata): Logger => {
	/**
	 * Logs a message with the task metadata.
	 * @param {string} message The message to be logged.
	 */
	return (message: string) => {
		console.log(
			white(bgGreen(`[aoc:${metadata.year}-${metadata.day}-p${metadata.part}]`)),
			message,
		);
	};
};
