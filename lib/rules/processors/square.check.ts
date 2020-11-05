import { ReflectSceneNode } from "@bridged.xyz/design-sdk/lib/nodes";

export function checkIfSquare(node: ReflectSceneNode): boolean {
    const SQUARE_SAFE_DIFF_RANGE = 0.2
    const isSquare = Math.abs(node.width - node.height) < SQUARE_SAFE_DIFF_RANGE

    return isSquare;
}