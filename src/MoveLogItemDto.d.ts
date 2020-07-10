import { CardDto } from "./CardDto"
import { PlayerDto } from "./PlayerDto";

export interface MoveLogItemDto {
    card: CardDto | null;
    taken: CardDto[];
    timestamp: string;
    player: PlayerDto;
    isScopa: boolean;
}