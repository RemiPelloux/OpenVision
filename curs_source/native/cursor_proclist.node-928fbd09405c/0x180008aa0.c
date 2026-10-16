
/* Address: 0x180008aa0; Evidence: ev_0839ac685f361f879bb2045c9659973c70efb01dbb8c65a9092c6e8b3480383c */

undefined8 * FUN_180008aa0(longlong param_1,undefined8 *param_2,undefined8 *param_3)

{
  longlong lVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  undefined8 *puVar4;
  undefined8 *puVar5;
  undefined8 *puVar6;
  longlong lVar7;
  undefined8 *puVar8;
  undefined8 *puVar9;
  longlong *plVar10;
  
  if (param_2 != param_3) {
    lVar1 = *(longlong *)(param_1 + 0x18);
    puVar6 = (undefined8 *)*param_2;
    puVar2 = *(undefined8 **)(param_1 + 8);
    puVar3 = (undefined8 *)param_2[1];
    plVar10 = (longlong *)
              (((((((ulonglong)*(byte *)(param_2 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                  (ulonglong)*(byte *)((longlong)param_2 + 0x11)) * 0x100000001b3 ^
                 (ulonglong)*(byte *)((longlong)param_2 + 0x12)) * 0x100000001b3 ^
                (ulonglong)*(byte *)((longlong)param_2 + 0x13)) * 0x100000001b3 &
               *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
    puVar4 = (undefined8 *)*plVar10;
    puVar8 = (undefined8 *)plVar10[1];
    lVar7 = param_1;
    FUN_1800091d0(param_1,param_2);
    *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
    puVar5 = param_2;
    while (puVar9 = puVar6, puVar5 != puVar8) {
      if (puVar9 == param_3) {
        if (puVar4 == param_2) {
          *plVar10 = (longlong)puVar9;
        }
        goto LAB_180008c61;
      }
      puVar6 = (undefined8 *)*puVar9;
      FUN_1800091d0(lVar7,puVar9);
      *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
      puVar5 = puVar9;
    }
    puVar6 = puVar3;
    if (puVar4 == param_2) {
      *plVar10 = (longlong)puVar2;
      puVar6 = puVar2;
    }
    plVar10[1] = (longlong)puVar6;
    while (puVar9 != param_3) {
      puVar6 = (undefined8 *)*puVar9;
      plVar10 = (longlong *)
                (((((((ulonglong)*(byte *)(puVar9 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                    (ulonglong)*(byte *)((longlong)puVar9 + 0x11)) * 0x100000001b3 ^
                   (ulonglong)*(byte *)((longlong)puVar9 + 0x12)) * 0x100000001b3 ^
                  (ulonglong)*(byte *)((longlong)puVar9 + 0x13)) * 0x100000001b3 &
                 *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
      puVar4 = (undefined8 *)plVar10[1];
      FUN_1800091d0(lVar7,puVar9);
      *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
      puVar8 = puVar9;
      while (puVar9 = puVar6, puVar8 != puVar4) {
        if (puVar9 == param_3) {
          *plVar10 = (longlong)puVar9;
          goto LAB_180008c61;
        }
        puVar6 = (undefined8 *)*puVar9;
        FUN_1800091d0(lVar7,puVar9);
        *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
        puVar8 = puVar9;
      }
      *plVar10 = (longlong)puVar2;
      plVar10[1] = (longlong)puVar2;
    }
LAB_180008c61:
    *puVar3 = puVar9;
    puVar9[1] = puVar3;
  }
  return param_3;
}

