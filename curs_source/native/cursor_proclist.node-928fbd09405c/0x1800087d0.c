
/* Address: 0x1800087d0; Evidence: ev_1a7064205ba13e588768edb5755fa4cb8646921322ac99cf27cad82042c6287a */

longlong * FUN_1800087d0(longlong param_1,longlong *param_2,longlong *param_3)

{
  longlong lVar1;
  undefined8 *puVar2;
  undefined8 *puVar3;
  longlong *plVar4;
  LPVOID pvVar5;
  undefined8 *puVar6;
  LPVOID pvVar7;
  longlong *plVar8;
  longlong *plVar9;
  longlong *plVar10;
  longlong *plVar11;
  
  if (param_2 == param_3) {
    return param_3;
  }
  lVar1 = *(longlong *)(param_1 + 0x18);
  puVar2 = *(undefined8 **)(param_1 + 8);
  puVar3 = (undefined8 *)param_2[1];
  plVar10 = (longlong *)
            (((((((ulonglong)*(byte *)(param_2 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                (ulonglong)*(byte *)((longlong)param_2 + 0x11)) * 0x100000001b3 ^
               (ulonglong)*(byte *)((longlong)param_2 + 0x12)) * 0x100000001b3 ^
              (ulonglong)*(byte *)((longlong)param_2 + 0x13)) * 0x100000001b3 &
             *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
  plVar4 = (longlong *)*plVar10;
  plVar8 = (longlong *)plVar10[1];
  plVar11 = param_2;
  do {
    plVar9 = (longlong *)*plVar11;
    pvVar5 = (LPVOID)plVar11[3];
    if (pvVar5 != (LPVOID)0x0) {
      pvVar7 = pvVar5;
      if ((0xfff < (plVar11[5] - (longlong)pvVar5 & 0xfffffffffffffffcU)) &&
         (pvVar7 = *(LPVOID *)((longlong)pvVar5 + -8),
         0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar7)))) {
LAB_180008a7a:
                    /* WARNING: Subroutine does not return */
        _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
      }
      thunk_FUN_1800116e0(pvVar7);
      plVar11[3] = 0;
      plVar11[4] = 0;
      plVar11[5] = 0;
    }
    thunk_FUN_1800116e0(plVar11);
    *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
    if (plVar11 == plVar8) {
      puVar6 = puVar3;
      if (plVar4 == param_2) {
        *plVar10 = (longlong)puVar2;
        puVar6 = puVar2;
      }
      plVar10[1] = (longlong)puVar6;
      while (plVar9 != param_3) {
        plVar11 = (longlong *)
                  (((((((ulonglong)*(byte *)(plVar9 + 2) ^ 0xcbf29ce484222325) * 0x100000001b3 ^
                      (ulonglong)*(byte *)((longlong)plVar9 + 0x11)) * 0x100000001b3 ^
                     (ulonglong)*(byte *)((longlong)plVar9 + 0x12)) * 0x100000001b3 ^
                    (ulonglong)*(byte *)((longlong)plVar9 + 0x13)) * 0x100000001b3 &
                   *(ulonglong *)(param_1 + 0x30)) * 0x10 + lVar1);
        plVar4 = (longlong *)plVar11[1];
        plVar8 = plVar9;
        while( true ) {
          plVar9 = (longlong *)*plVar8;
          pvVar5 = (LPVOID)plVar8[3];
          if (pvVar5 != (LPVOID)0x0) {
            pvVar7 = pvVar5;
            if ((0xfff < (plVar8[5] - (longlong)pvVar5 & 0xfffffffffffffffcU)) &&
               (pvVar7 = *(LPVOID *)((longlong)pvVar5 + -8),
               0x1f < (ulonglong)((longlong)pvVar5 + (-8 - (longlong)pvVar7)))) goto LAB_180008a7a;
            thunk_FUN_1800116e0(pvVar7);
            plVar8[3] = 0;
            plVar8[4] = 0;
            plVar8[5] = 0;
          }
          thunk_FUN_1800116e0(plVar8);
          *(longlong *)(param_1 + 0x10) = *(longlong *)(param_1 + 0x10) + -1;
          if (plVar8 == plVar4) break;
          plVar8 = plVar9;
          if (plVar9 == param_3) {
            *plVar11 = (longlong)plVar9;
            goto LAB_180008a27;
          }
        }
        *plVar11 = (longlong)puVar2;
        plVar11[1] = (longlong)puVar2;
      }
      goto LAB_180008a27;
    }
    plVar11 = plVar9;
    if (plVar9 == param_3) {
      if (plVar4 == param_2) {
        *plVar10 = (longlong)plVar9;
      }
LAB_180008a27:
      *puVar3 = plVar9;
      plVar9[1] = (longlong)puVar3;
      return param_3;
    }
  } while( true );
}

