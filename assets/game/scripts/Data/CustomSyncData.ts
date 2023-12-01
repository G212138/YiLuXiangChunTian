/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
export class CustomSyncData {
    public curLevel: number = 0; // 当前关卡(第一关为0)
    // TODO 自定义

    public levelTypeIndex: number = null;
    public level_1_selfData: number[][][] = [[],[],[],[],[],[]];
    public level_1_curPointIndex: number[] = [null, null, null, null, null, null];
    public level_1_finish: boolean[] = [false, false, false, false, false, false];

    public level_2_selfData: number[][][] = [[],[],[],[],[],[]];
    public level_2_curPointIndex: number[] = [null, null, null, null, null, null];
    public level_2_hasChoose: boolean[] = [false, false, false, false, false, false];
    public level_2_yes_btn: number[] = [0, 0, 0, 0, 0, 0];
    public level_2_no_btn: number[] = [0, 0, 0, 0, 0, 0];
}
