
/* Address: 0x180009c78; Evidence: ev_070f91780966f8266795f0dd04f3cabad3966d1a3f047cd9c651325c15db0f31 */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_180009c78(int *param_1,longlong *param_2,ULONG_PTR param_3,undefined8 *param_4,
                  byte *param_5,int param_6)

{
  byte bVar1;
  char cVar2;
  uint uVar3;
  int iVar4;
  longlong lVar5;
  PVOID pvVar6;
  longlong lVar7;
  byte *pbVar8;
  byte *pbVar9;
  ulonglong uVar10;
  byte *pbVar11;
  undefined1 auStackY_178 [32];
  uint local_118;
  undefined8 local_100;
  undefined8 uStack_f8;
  longlong *local_f0;
  longlong local_e8;
  uint uStack_e0;
  uint local_d0;
  int local_c8 [2];
  undefined8 local_c0;
  undefined8 local_b8;
  undefined1 local_b0 [4];
  byte local_ac;
  int local_a8;
  uint local_78 [10];
  ulonglong local_50;
  
  local_50 = DAT_180023000 ^ (ulonglong)auStackY_178;
  if (*param_1 != -0x7ffffffd) {
    local_f0 = param_2;
    lVar5 = FUN_180008548();
    if (*(longlong *)(lVar5 + 0x10) != 0) {
      pvVar6 = EncodePointer((PVOID)0x0);
      lVar5 = FUN_180008548();
      if ((((*(PVOID *)(lVar5 + 0x10) != pvVar6) && (*param_1 != -0x1fbcb0b3)) &&
          (*param_1 != -0x1fbcbcae)) && (iVar4 = FUN_180007288(param_1,param_2,param_3), iVar4 != 0)
         ) {
        return;
      }
    }
    FUN_18000a79c(local_78,(longlong)param_5,param_4[1]);
    if (local_78[0] == 0) {
                    /* WARNING: Subroutine does not return */
      abort();
    }
    FUN_180007780((undefined4 *)&local_e8,(int *)local_78,param_6);
    local_118 = uStack_e0;
    if (uStack_e0 < local_d0) {
      do {
        local_100 = *(undefined8 *)(local_e8 + 0x18);
        uStack_f8 = *(undefined8 *)(local_e8 + 0x20);
        if ((*(int *)(local_e8 + 0x18) <= param_6) && (param_6 <= *(int *)(local_e8 + 0x1c))) {
          FUN_18000a718((HandlerMap4 *)local_c8,(longlong)&local_100,param_4[1],
                        *(undefined4 *)param_4[2]);
          local_c0 = local_b8;
          FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_c8);
          iVar4 = local_c8[0];
          local_c0 = local_b8;
          FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_c8);
          uVar10 = (ulonglong)(iVar4 - 1U);
          if (iVar4 - 1U != 0) {
            do {
              FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_c8);
              uVar10 = uVar10 - 1;
            } while (uVar10 != 0);
          }
          lVar5 = (longlong)local_a8;
          if ((local_a8 != 0) && (lVar7 = FUN_180007da0(), lVar7 + lVar5 != 0)) {
            lVar5 = (longlong)local_a8;
            if (local_a8 == 0) {
              lVar7 = 0;
            }
            else {
              lVar7 = FUN_180007da0();
              lVar7 = lVar7 + lVar5;
            }
            if (*(char *)(lVar7 + 0x10) != '\0') goto LAB_180009eac;
          }
          if ((local_ac & 0x40) == 0) {
            FUN_180008eec((ULONG_PTR)param_1,local_f0,param_3,param_4,param_5,(longlong)local_b0,
                          (byte *)0x0,(int *)&local_100);
          }
        }
LAB_180009eac:
        pbVar11 = *(byte **)(local_e8 + 8);
        lVar5 = (longlong)(char)(&DAT_1800175b0)[*pbVar11 & 0xf];
        bVar1 = (&DAT_1800175c0)[*pbVar11 & 0xf];
        pbVar8 = pbVar11 + -lVar5;
        uVar3 = *(uint *)(pbVar8 + -4);
        *(byte **)(local_e8 + 8) = pbVar8;
        *(uint *)(local_e8 + 0x18) = uVar3 >> (bVar1 & 0x1f);
        cVar2 = (&DAT_1800175b0)[*pbVar8 & 0xf];
        pbVar9 = pbVar11 + (-lVar5 - (longlong)cVar2);
        *(uint *)(local_e8 + 0x1c) =
             *(uint *)(pbVar9 + -4) >> ((&DAT_1800175c0)[*pbVar8 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar9;
        pbVar11 = pbVar11 + ((-(longlong)cVar2 - (longlong)(char)(&DAT_1800175b0)[*pbVar9 & 0xf]) -
                            lVar5);
        *(uint *)(local_e8 + 0x20) =
             *(uint *)(pbVar11 + -4) >> ((&DAT_1800175c0)[*pbVar9 & 0xf] & 0x1f);
        *(byte **)(local_e8 + 8) = pbVar11;
        *(undefined4 *)(local_e8 + 0x24) = *(undefined4 *)pbVar11;
        local_118 = local_118 + 1;
        *(byte **)(local_e8 + 8) = pbVar11 + 4;
      } while (local_118 < local_d0);
    }
  }
  return;
}

