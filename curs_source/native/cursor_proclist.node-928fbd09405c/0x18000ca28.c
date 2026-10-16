
/* Address: 0x18000ca28; Evidence: ev_7c2ebaf886ce8021726e99566201800ac4698a7f650f74efb79288940a7d028e */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000ca28(int *param_1,longlong *param_2,ULONG_PTR param_3,ulonglong *param_4,byte *param_5
                  ,char param_6,undefined8 param_7,undefined8 param_8)

{
  int iVar1;
  uint uVar2;
  undefined4 uVar3;
  int iVar4;
  char cVar5;
  byte bVar6;
  int iVar7;
  longlong lVar8;
  ulonglong uVar9;
  undefined8 uVar10;
  uint uVar11;
  byte *pbVar12;
  byte *pbVar13;
  byte *pbVar14;
  int iVar15;
  int *piVar16;
  undefined1 auStackY_1c8 [32];
  int local_160;
  ULONG_PTR local_158;
  longlong local_140;
  undefined8 uStack_138;
  undefined8 local_128;
  longlong *local_120;
  longlong local_118;
  undefined8 uStack_110;
  uint local_100;
  undefined8 local_f8;
  undefined8 uStack_f0;
  undefined8 local_e8;
  undefined8 uStack_e0;
  undefined8 local_d8;
  uint local_d0 [10];
  int local_a8 [6];
  undefined8 local_90;
  undefined8 uStack_88;
  undefined8 local_80;
  undefined8 uStack_78;
  undefined8 local_70;
  ulonglong local_58;
  
  local_58 = DAT_180028040 ^ (ulonglong)auStackY_1c8;
  local_128 = param_8;
  local_120 = param_2;
  iVar7 = FUN_18000bcb8((longlong)param_5,param_4);
  if ((int)param_4[9] == 0) {
    lVar8 = FUN_18000babc();
    if (*(int *)(lVar8 + 0x78) != -2) {
      lVar8 = FUN_18000babc();
      iVar7 = *(int *)(lVar8 + 0x78);
      lVar8 = FUN_18000babc();
      *(undefined4 *)(lVar8 + 0x78) = 0xfffffffe;
    }
  }
  else {
    lVar8 = FUN_18000babc();
    if (*(int *)(lVar8 + 0x78) != -2) goto LAB_18000cf59;
    iVar7 = (int)param_4[9] + -2;
  }
  if (-2 < iVar7) {
    if (*(int *)(param_5 + 8) == 0) {
      uVar11 = 0;
    }
    else {
      uVar11 = *(byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) & 0xf;
      uVar11 = *(uint *)((byte *)(param_4[1] + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_18001b448)[uVar11])) >>
               ((&DAT_18001b458)[uVar11] & 0x1f);
    }
    if (iVar7 < (int)uVar11) {
      local_158 = param_3;
      if ((((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
          ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
         (*(longlong *)(param_1 + 0xc) == 0)) {
        lVar8 = FUN_18000babc();
        if (*(longlong *)(lVar8 + 0x20) == 0) {
          return;
        }
        lVar8 = FUN_18000babc();
        param_1 = *(int **)(lVar8 + 0x20);
        lVar8 = FUN_18000babc();
        local_158 = *(ULONG_PTR *)(lVar8 + 0x28);
        FUN_18000b35c(*(undefined8 *)(param_1 + 0xe));
        if ((param_1 == (int *)0x0) ||
           (((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
            (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
             (*(longlong *)(param_1 + 0xc) == 0)))))) goto LAB_18000cf59;
        lVar8 = FUN_18000babc();
        if (*(longlong *)(lVar8 + 0x38) != 0) {
          lVar8 = FUN_18000babc();
          piVar16 = *(int **)(lVar8 + 0x38);
          lVar8 = FUN_18000babc();
          *(undefined8 *)(lVar8 + 0x38) = 0;
          cVar5 = FUN_18000e9cc((longlong)param_1,piVar16);
          if (cVar5 == '\0') {
            uVar9 = FUN_18000eab4(piVar16);
            if ((char)uVar9 != '\0') {
              FUN_18000b4ec(param_1);
              FUN_18000ddfc(&local_140);
                    /* WARNING: Subroutine does not return */
              FUN_18000b964(&local_140,&DAT_180025f60);
            }
                    /* WARNING: Subroutine does not return */
            FUN_180010adc();
          }
        }
      }
      FUN_18000dcdc(local_d0,(longlong)param_5,param_4[1]);
      if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
         ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
        if (local_d0[0] != 0) {
          FUN_18000acfc((undefined4 *)&local_118,(int *)local_d0,iVar7);
          uVar11 = (uint)uStack_110;
          local_140 = local_118;
          uStack_138 = uStack_110;
          if (uVar11 < local_100) {
            do {
              local_140 = *(longlong *)(local_118 + 0x18);
              uStack_138 = *(undefined8 *)(local_118 + 0x20);
              if ((*(int *)(local_118 + 0x18) <= iVar7) && (iVar7 <= *(int *)(local_118 + 0x1c))) {
                FUN_18000dc58((HandlerMap4 *)local_a8,(longlong)&local_140,param_4[1],
                              *(undefined4 *)param_4[2]);
                iVar4 = local_a8[0];
                local_160 = 0;
                if (local_a8[0] != 0) {
                  do {
                    local_f8 = local_90;
                    uStack_f0 = uStack_88;
                    local_d8 = local_70;
                    local_e8 = local_80;
                    uStack_e0 = uStack_78;
                    iVar15 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                    lVar8 = FUN_18000b330();
                    piVar16 = (int *)((longlong)iVar15 + lVar8 + 4);
                    iVar15 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                    lVar8 = FUN_18000b330();
                    for (iVar15 = *(int *)(lVar8 + iVar15); 0 < iVar15; iVar15 = iVar15 + -1) {
                      iVar1 = *piVar16;
                      lVar8 = FUN_18000b330();
                      uVar10 = FUN_18000d5ec((longlong)&local_f8,(byte *)(iVar1 + lVar8),
                                             *(byte **)(param_1 + 0xc));
                      if ((int)uVar10 != 0) {
                        FUN_18000c460((ULONG_PTR)param_1,local_120,local_158,param_4,param_5,
                                      (longlong)&local_f8,(byte *)(iVar1 + lVar8),(int *)&local_140)
                        ;
                        goto LAB_18000cde8;
                      }
                      piVar16 = piVar16 + 1;
                    }
                    FH4::HandlerMap4::DecompHandler((HandlerMap4 *)local_a8);
                    local_160 = local_160 + 1;
                  } while (local_160 != iVar4);
                }
              }
LAB_18000cde8:
              pbVar14 = *(byte **)(local_118 + 8);
              uVar11 = uVar11 + 1;
              lVar8 = (longlong)(char)(&DAT_18001b448)[*pbVar14 & 0xf];
              bVar6 = (&DAT_18001b458)[*pbVar14 & 0xf];
              pbVar12 = pbVar14 + -lVar8;
              uVar2 = *(uint *)(pbVar12 + -4);
              *(byte **)(local_118 + 8) = pbVar12;
              *(uint *)(local_118 + 0x18) = uVar2 >> (bVar6 & 0x1f);
              cVar5 = (&DAT_18001b448)[*pbVar12 & 0xf];
              pbVar13 = pbVar14 + (-lVar8 - (longlong)cVar5);
              *(uint *)(local_118 + 0x1c) =
                   *(uint *)(pbVar13 + -4) >> ((&DAT_18001b458)[*pbVar12 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar13;
              pbVar14 = pbVar14 + ((-(longlong)cVar5 -
                                   (longlong)(char)(&DAT_18001b448)[*pbVar13 & 0xf]) - lVar8);
              *(uint *)(local_118 + 0x20) =
                   *(uint *)(pbVar14 + -4) >> ((&DAT_18001b458)[*pbVar13 & 0xf] & 0x1f);
              *(byte **)(local_118 + 8) = pbVar14;
              uVar3 = *(undefined4 *)pbVar14;
              *(byte **)(local_118 + 8) = pbVar14 + 4;
              *(undefined4 *)(local_118 + 0x24) = uVar3;
            } while (uVar11 < local_100);
          }
        }
        if (((*param_5 & 0x40) != 0) && (bVar6 = FUN_18000aa18(param_4,param_5), bVar6 == 0)) {
          lVar8 = FUN_18000babc();
          *(int **)(lVar8 + 0x20) = param_1;
          lVar8 = FUN_18000babc();
          *(ULONG_PTR *)(lVar8 + 0x28) = local_158;
                    /* WARNING: Subroutine does not return */
          FUN_180010adc();
        }
      }
      else if (local_d0[0] != 0) {
        if (param_6 != '\0') goto LAB_18000cf59;
        FUN_18000d1c4(param_1,param_2,local_158,param_4,param_5,iVar7);
      }
      lVar8 = FUN_18000babc();
      if (*(longlong *)(lVar8 + 0x38) == 0) {
        return;
      }
    }
  }
LAB_18000cf59:
                    /* WARNING: Subroutine does not return */
  abort();
}

