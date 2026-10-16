
/* Address: 0x180002c04; Evidence: ev_e2447260634d1cd159e36e01678c0ce018573d6b6d93cc2c5bb7ed73484f993d */

undefined8 *
FUN_180002c04(undefined8 *param_1,undefined8 param_2,int param_3,ulonglong *param_4,longlong param_5
             )

{
  uint uVar1;
  longlong lVar2;
  uint uVar3;
  ulonglong uVar4;
  int iVar5;
  int *piVar6;
  uint uVar7;
  int iVar9;
  ulonglong uVar10;
  int iVar11;
  longlong lVar12;
  ulonglong uVar13;
  undefined4 uStack_3c;
  undefined4 uStack_2c;
  ulonglong uVar8;
  
  uVar3 = *(uint *)(param_5 + 0xc);
  iVar5 = FUN_18000332c(param_5,param_4);
  uVar8 = 0;
  if (uVar3 == 0) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  uVar4 = param_4[1];
  lVar12 = (longlong)*(int *)(param_5 + 0x10);
  iVar9 = -1;
  uVar13 = 0xffffffff;
  uVar7 = uVar3;
  while( true ) {
    uVar1 = uVar7 - 1;
    lVar2 = uVar4 + (ulonglong)uVar1 * 0x14;
    if ((*(int *)(lVar2 + 4 + lVar12) < iVar5) && (iVar5 <= *(int *)(lVar2 + 8 + lVar12))) break;
    uVar10 = uVar8;
    uVar7 = uVar1;
    if (uVar1 == 0) {
LAB_180002c8c:
      piVar6 = (int *)(uVar4 + lVar12);
      do {
        if ((((uVar10 == 0) ||
             ((*(int *)(uVar10 + 4) < *piVar6 && (piVar6[1] <= *(int *)(uVar10 + 8))))) &&
            (*piVar6 <= param_3)) && ((param_3 <= piVar6[1] && (uVar13 = uVar8, iVar9 == -1)))) {
          iVar9 = (int)uVar8;
        }
        uVar7 = (int)uVar8 + 1;
        uVar8 = (ulonglong)uVar7;
        piVar6 = piVar6 + 5;
      } while (uVar7 < uVar3);
      iVar5 = 0;
      if (iVar9 != -1) {
        iVar5 = iVar9;
      }
      iVar11 = 0;
      if (iVar9 != -1) {
        iVar11 = (int)uVar13 + 1;
      }
      *param_1 = param_2;
      param_1[1] = CONCAT44(uStack_3c,iVar5);
      param_1[2] = param_2;
      param_1[3] = CONCAT44(uStack_2c,iVar11);
      return param_1;
    }
  }
  uVar10 = uVar4 + (ulonglong)(uVar7 - 1) * 0x14 + lVar12;
  goto LAB_180002c8c;
}

