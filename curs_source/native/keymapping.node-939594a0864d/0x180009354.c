
/* Address: 0x180009354; Evidence: ev_3d2032ab97eb559b2a4ab2ba2b9d81e6edd517093a45876cfca20cb0dd7ee4ce */

undefined4 FUN_180009354(ulonglong *param_1)

{
  int *piVar1;
  bool bVar2;
  char cVar3;
  int iVar4;
  undefined8 uVar5;
  ulonglong uVar6;
  byte bVar7;
  char *pcVar8;
  ulonglong *puVar9;
  longlong *plVar10;
  
  plVar10 = (longlong *)param_1[1];
  if ((_iobuf *)param_1[0x8c] == (_iobuf *)0x0) {
    *(undefined1 *)(plVar10 + 6) = 1;
    *(undefined4 *)((longlong)plVar10 + 0x2c) = 0x16;
  }
  else {
    bVar2 = __acrt_stdio_char_traits<char>::validate_stream_is_ansi_if_required
                      ((_iobuf *)param_1[0x8c]);
    if (!bVar2) {
      return 0xffffffff;
    }
    pcVar8 = (char *)param_1[2];
    if (pcVar8 != (char *)0x0) {
      iVar4 = (int)param_1[0x8d] + 1;
      *(int *)(param_1 + 0x8d) = iVar4;
      do {
        if (iVar4 == 2) {
          return (int)param_1[4];
        }
        *(undefined4 *)(param_1 + 9) = 0;
        *(undefined1 *)((longlong)param_1 + 0x24) = 0;
        cVar3 = *pcVar8;
        while( true ) {
          pcVar8 = pcVar8 + 1;
          param_1[2] = (ulonglong)pcVar8;
          *(char *)((longlong)param_1 + 0x39) = cVar3;
          if ((cVar3 == '\0') || ((int)param_1[4] < 0)) break;
          bVar7 = 0;
          if ((byte)(cVar3 - 0x20U) < 0x5b) {
            bVar7 = (&DAT_18001a611)[(ulonglong)((int)cVar3 - 0x20U & 0x7f) * 2];
          }
          bVar7 = (&DAT_18001a610)
                  [(ulonglong)((uint)*(byte *)((longlong)param_1 + 0x24) + (uint)bVar7 * 8 & 0x7f) *
                   2];
          *(byte *)((longlong)param_1 + 0x24) = bVar7;
          if (7 < bVar7) {
LAB_1800096a4:
            uVar6 = param_1[1];
            *(undefined1 *)(uVar6 + 0x30) = 1;
            *(undefined4 *)(uVar6 + 0x2c) = 0x16;
            plVar10 = (longlong *)param_1[1];
            goto LAB_1800096bc;
          }
          if (bVar7 == 0) {
            plVar10 = (longlong *)param_1[1];
            *(undefined1 *)((longlong)param_1 + 0x4c) = 0;
            if ((char)plVar10[5] == '\0') {
              FUN_18000a2a0(plVar10);
            }
            bVar7 = *(byte *)((longlong)param_1 + 0x39);
            if ((-2 < (char)bVar7) &&
               ((*(ushort *)(*(longlong *)plVar10[3] + (longlong)(char)bVar7 * 2) & 0x8000) != 0)) {
              if ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) == 0) ||
                  (*(longlong *)(param_1[0x8c] + 8) != 0)) &&
                 (uVar6 = FUN_18000e624(bVar7,(FILE *)param_1[0x8c],param_1[1]), (int)uVar6 == -1))
              {
                *(undefined4 *)(param_1 + 4) = 0xffffffff;
              }
              else {
                *(int *)(param_1 + 4) = (int)param_1[4] + 1;
              }
              bVar7 = *(byte *)param_1[2];
              param_1[2] = (ulonglong)((byte *)param_1[2] + 1);
              *(byte *)((longlong)param_1 + 0x39) = bVar7;
              if (bVar7 == 0) {
                uVar6 = param_1[1];
                *(undefined1 *)(uVar6 + 0x30) = 1;
                *(undefined4 *)(uVar6 + 0x2c) = 0x16;
                FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,
                              (longlong *)param_1[1]);
                goto LAB_1800096a4;
              }
            }
            if ((((*(uint *)(param_1[0x8c] + 0x14) >> 0xc & 1) == 0) ||
                (*(longlong *)(param_1[0x8c] + 8) != 0)) &&
               (uVar6 = FUN_18000e624(bVar7,(FILE *)param_1[0x8c],param_1[1]), (int)uVar6 == -1)) {
              *(undefined4 *)(param_1 + 4) = 0xffffffff;
            }
            else {
              *(int *)(param_1 + 4) = (int)param_1[4] + 1;
            }
          }
          else if (bVar7 == 1) {
            param_1[5] = 0;
            *(undefined1 *)(param_1 + 7) = 0;
            *(undefined4 *)(param_1 + 6) = 0xffffffff;
            *(undefined4 *)((longlong)param_1 + 0x34) = 0;
            *(undefined1 *)((longlong)param_1 + 0x4c) = 0;
          }
          else if (bVar7 == 2) {
            if (cVar3 == ' ') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 2;
            }
            else if (cVar3 == '#') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 0x20;
            }
            else if (cVar3 == '+') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 1;
            }
            else if (cVar3 == '-') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 4;
            }
            else if (cVar3 == '0') {
              *(uint *)(param_1 + 5) = (uint)param_1[5] | 8;
            }
          }
          else {
            if (bVar7 == 3) {
              if (cVar3 == '*') {
                piVar1 = (int *)param_1[3];
                param_1[3] = (ulonglong)(piVar1 + 2);
                iVar4 = *piVar1;
                *(int *)((longlong)param_1 + 0x2c) = iVar4;
                if (iVar4 < 0) {
                  *(uint *)(param_1 + 5) = (uint)param_1[5] | 4;
                  *(int *)((longlong)param_1 + 0x2c) = -iVar4;
                }
LAB_1800094e5:
                cVar3 = '\x01';
              }
              else {
                puVar9 = (ulonglong *)((longlong)param_1 + 0x2c);
LAB_18000948f:
                cVar3 = FUN_1800092c4((longlong)param_1,(uint *)puVar9);
              }
            }
            else {
              if (bVar7 == 4) {
                *(undefined4 *)(param_1 + 6) = 0;
                goto LAB_180009641;
              }
              if (bVar7 == 5) {
                if (cVar3 == '*') {
                  piVar1 = (int *)param_1[3];
                  param_1[3] = (ulonglong)(piVar1 + 2);
                  iVar4 = *piVar1;
                  *(int *)(param_1 + 6) = iVar4;
                  if (iVar4 < 0) {
                    *(undefined4 *)(param_1 + 6) = 0xffffffff;
                  }
                  goto LAB_1800094e5;
                }
                puVar9 = param_1 + 6;
                goto LAB_18000948f;
              }
              if (bVar7 == 6) {
                uVar6 = FUN_1800096d8(param_1);
                cVar3 = (char)uVar6;
              }
              else {
                if (bVar7 != 7) {
                  return 0xffffffff;
                }
                uVar5 = FUN_180009860(param_1);
                cVar3 = (char)uVar5;
              }
            }
            if (cVar3 == '\0') {
              return 0xffffffff;
            }
          }
LAB_180009641:
          pcVar8 = (char *)param_1[2];
          cVar3 = *pcVar8;
        }
        *(int *)(param_1 + 0x8d) = (int)param_1[0x8d] + 1;
        iVar4 = (int)param_1[0x8d];
      } while( true );
    }
    uVar6 = param_1[1];
    *(undefined1 *)(uVar6 + 0x30) = 1;
    *(undefined4 *)(uVar6 + 0x2c) = 0x16;
    plVar10 = (longlong *)param_1[1];
  }
LAB_1800096bc:
  FUN_180008164((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0,plVar10);
  return 0xffffffff;
}

