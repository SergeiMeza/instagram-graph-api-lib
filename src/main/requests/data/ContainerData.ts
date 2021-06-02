/**
 * Possible status codes for the container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export enum CONTAINER_STATUS_CODE {
    /**
     * The container was not published within 24 hours and has expired.
     */
    EXPIRED,

    /**
     * The container failed to complete the publishing process.
     */
    ERROR,

    /**
     * The container and its media object are ready to be published.
     */
    FINISHED,

    /**
     * The container is still in the publishing process.
     */
    IN_PROGRESS,

    /**
     * The container's media object has been published.
     */
    PUBLISHED,
}

/**
 * Interface to represent the data regarding a container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export interface ContainerData {
    /**
     * The container id.
     */
    id: string;

    /**
     * The publishing status of the container.
     */
    status?: string;

    /**
     * The publishing status code of the container.
     */
    status_code?: CONTAINER_STATUS_CODE;
}