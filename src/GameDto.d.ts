import { DeckDto } from "./DeckDto";
import { HandDto } from "./HandDto";
import { TableDto } from "./TableDto";
import { ScoreboardDto } from "./ScoreboardDto";
import { MoveLogItemDto } from "./MoveLogItemDto";

export interface GameDto {
    deck: DeckDto;
    numberOfPlayers: number;
    hands: HandDto[];
    table: TableDto;
    lastTaker: HandDto | undefined;
    whoseTurn: HandDto | undefined;
    scoreboard: ScoreboardDto;
    roundsPlayed: number;
    moves: MoveLogItemDto[];
    status: string;
}