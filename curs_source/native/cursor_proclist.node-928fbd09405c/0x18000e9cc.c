
/* Address: 0x18000e9cc; Evidence: ev_674fe44e6fe6aed48b2b45dff4a65a05c02af06f3deb9c542c08114fc601f567 */

undefined1 FUN_18000e9cc(longlong param_1,int *param_2)

{
  int iVar1;
  int iVar2;
  byte *pbVar3;
  longlong lVar4;
  longlong lVar5;
  undefined8 uVar6;
  int iVar7;
  int *piVar8;
  undefined1 uVar9;
  int iVar10;
  
  if (param_2 == (int *)0x0) {
                    /* WARNING: Subroutine does not return */
    abort();
  }
  uVar9 = 0;
  iVar7 = 0;
  if (0 < *param_2) {
    do {
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_18000b330();
      piVar8 = (int *)((longlong)iVar10 + lVar4 + 4);
      iVar10 = *(int *)(*(longlong *)(param_1 + 0x30) + 0xc);
      lVar4 = FUN_18000b330();
      iVar10 = *(int *)(lVar4 + iVar10);
      if (0 < iVar10) {
        do {
          iVar1 = *piVar8;
          lVar4 = FUN_18000b330();
          iVar2 = param_2[1];
          pbVar3 = *(byte **)(param_1 + 0x30);
          lVar5 = FUN_18000b31c();
          uVar6 = FUN_18000d4cc((byte *)(lVar5 + (longlong)iVar7 * 0x14 + (longlong)iVar2),
                                (byte *)(iVar1 + lVar4),pbVar3);
          if ((int)uVar6 != 0) {
            uVar9 = 1;
            break;
          }
          iVar10 = iVar10 + -1;
          piVar8 = piVar8 + 1;
        } while (0 < iVar10);
      }
      iVar7 = iVar7 + 1;
    } while (iVar7 < *param_2);
  }
  return uVar9;
}

