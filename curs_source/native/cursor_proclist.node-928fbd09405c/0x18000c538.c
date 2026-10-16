
/* Address: 0x18000c538; Evidence: ev_3d548c4e537d9ee44d1e845d83a8f36dc8fd9341036b4ec1edb75865ba84005f */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

void FUN_18000c538(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
                  _s_FuncInfo *param_5,byte param_6,undefined8 param_7,longlong param_8)

{
  undefined8 *puVar1;
  int iVar2;
  char cVar3;
  bool bVar4;
  int iVar5;
  uint uVar6;
  longlong lVar7;
  ulonglong uVar8;
  undefined8 uVar9;
  longlong *plVar10;
  int *piVar11;
  uint uVar12;
  int iVar13;
  undefined1 auStackY_168 [32];
  int *in_stack_fffffffffffffed0;
  undefined4 uVar14;
  ULONG_PTR local_100;
  longlong local_e0;
  uint local_d8;
  undefined4 uStack_d4;
  longlong local_d0;
  undefined8 local_c8;
  int iStack_c0;
  uint uStack_bc;
  int local_b8;
  _s_FuncInfo *local_b0;
  undefined8 local_a8;
  longlong *local_a0;
  undefined8 uStack_98;
  longlong *local_90;
  undefined8 uStack_88;
  uint local_78;
  undefined8 local_70;
  undefined8 uStack_68;
  undefined4 local_60;
  ulonglong local_58;
  
  local_58 = DAT_180028040 ^ (ulonglong)auStackY_168;
  local_e0 = param_8;
  iVar5 = __FrameHandler3::GetHandlerSearchState(param_2,param_4,param_5);
  if ((-2 < iVar5) && (iVar5 < param_5->maxState)) {
    local_100 = param_3;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       (((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)) &&
        (*(longlong *)(param_1 + 0xc) == 0)))) {
      lVar7 = FUN_18000babc();
      if (*(longlong *)(lVar7 + 0x20) == 0) {
        return;
      }
      lVar7 = FUN_18000babc();
      param_1 = *(int **)(lVar7 + 0x20);
      lVar7 = FUN_18000babc();
      local_100 = *(ULONG_PTR *)(lVar7 + 0x28);
      FUN_18000b35c(*(undefined8 *)(param_1 + 0xe));
      if ((param_1 == (int *)0x0) ||
         ((((*param_1 == -0x1f928c9d && (param_1[6] == 4)) &&
           ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) &&
          (*(longlong *)(param_1 + 0xc) == 0)))) goto LAB_18000ca21;
      lVar7 = FUN_18000babc();
      if (*(longlong *)(lVar7 + 0x38) != 0) {
        lVar7 = FUN_18000babc();
        piVar11 = *(int **)(lVar7 + 0x38);
        lVar7 = FUN_18000babc();
        *(undefined8 *)(lVar7 + 0x38) = 0;
        cVar3 = FUN_18000e9cc((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          uVar8 = FUN_18000eab4(piVar11);
          if ((char)uVar8 == '\0') {
                    /* WARNING: Subroutine does not return */
            FUN_180010adc();
          }
          FUN_18000b4ec(param_1);
          FUN_18000ddfc(&local_c8);
                    /* WARNING: Subroutine does not return */
          FUN_18000b964(&local_c8,&DAT_180025f60);
        }
      }
    }
    uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
    local_a8 = *(undefined8 *)(param_4 + 8);
    local_b0 = param_5;
    if (((*param_1 == -0x1f928c9d) && (param_1[6] == 4)) &&
       ((param_1[8] == 0x19930520 || (param_1[8] + 0xe66cfadfU < 2)))) {
      if (param_5->nTryBlocks != 0) {
        FUN_18000abc4(&local_90,&local_b0,iVar5,(ulonglong *)param_4,(longlong)param_5);
        uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
        uVar6 = (uint)uStack_88;
        local_a0 = local_90;
        uStack_98 = uStack_88;
        if (uVar6 < local_78) {
          do {
            lVar7 = (longlong)*(int *)(*local_a0 + 0x10) + (ulonglong)uVar6 * 0x14;
            piVar11 = (int *)(lVar7 + local_90[1]);
            local_c8._0_4_ = *piVar11;
            local_c8._4_4_ = piVar11[1];
            iStack_c0 = piVar11[2];
            uStack_bc = piVar11[3];
            local_b8 = *(int *)(lVar7 + 0x10 + local_90[1]);
            if (((int)local_c8 <= iVar5) && (iVar5 <= local_c8._4_4_)) {
              local_d0 = (longlong)local_b8 + *(longlong *)(param_4 + 8);
              uVar8 = 0;
              uStack_d4 = 0;
              local_d8 = uStack_bc;
              if (uStack_bc != 0) {
                do {
                  puVar1 = (undefined8 *)(local_d0 + uVar8 * 0x14);
                  local_70 = *puVar1;
                  uStack_68 = puVar1[1];
                  local_60 = *(undefined4 *)(local_d0 + 0x10 + uVar8 * 0x14);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_18000b330();
                  piVar11 = (int *)(lVar7 + 4 + (longlong)iVar13);
                  iVar13 = *(int *)(*(longlong *)(param_1 + 0xc) + 0xc);
                  lVar7 = FUN_18000b330();
                  for (iVar13 = *(int *)(lVar7 + iVar13); 0 < iVar13; iVar13 = iVar13 + -1) {
                    iVar2 = *piVar11;
                    lVar7 = FUN_18000b330();
                    uVar9 = FUN_18000d4cc((byte *)&local_70,(byte *)(iVar2 + lVar7),
                                          *(byte **)(param_1 + 0xc));
                    if ((int)uVar9 != 0) {
                      in_stack_fffffffffffffed0 = (int *)&local_c8;
                      FUN_18000c388((ULONG_PTR)param_1,(longlong *)param_2,local_100,
                                    (ulonglong *)param_4,(ULONG_PTR)param_5,(byte *)&local_70,
                                    (byte *)(iVar2 + lVar7),in_stack_fffffffffffffed0);
                      goto LAB_18000c89d;
                    }
                    piVar11 = piVar11 + 1;
                  }
                  uVar12 = (int)uVar8 + 1;
                  uVar8 = (ulonglong)uVar12;
                } while (uVar12 != local_d8);
              }
            }
LAB_18000c89d:
            uVar14 = (undefined4)((ulonglong)in_stack_fffffffffffffed0 >> 0x20);
            uVar6 = uVar6 + 1;
          } while (uVar6 < local_78);
        }
      }
      if ((0x19930520 < (param_5->magicNumber_and_bbtFlags & 0x1fffffff)) &&
         (((iVar5 = param_5->dispESTypeList, iVar5 != 0 &&
           (lVar7 = FUN_18000b31c(), lVar7 + iVar5 != 0)) ||
          (((param_5->EHFlags & 4) != 0 &&
           (bVar4 = FUN_18000a9ec((ulonglong *)param_4,(longlong)param_5), !bVar4)))))) {
        if ((param_5->EHFlags & 4) != 0) {
          lVar7 = FUN_18000babc();
          *(int **)(lVar7 + 0x20) = param_1;
          lVar7 = FUN_18000babc();
          *(ULONG_PTR *)(lVar7 + 0x28) = local_100;
                    /* WARNING: Subroutine does not return */
          FUN_180010adc();
        }
        iVar5 = param_5->dispESTypeList;
        if (iVar5 == 0) {
          piVar11 = (int *)0x0;
        }
        else {
          lVar7 = FUN_18000b31c();
          piVar11 = (int *)(iVar5 + lVar7);
        }
        cVar3 = FUN_18000e9cc((longlong)param_1,piVar11);
        if (cVar3 == '\0') {
          plVar10 = FUN_18000aab8((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,
                                  &local_e0);
          FUN_18000ae7c(param_2,(ULONG_PTR)param_1,local_100,(ULONG_PTR)plVar10,0,(ULONG_PTR)param_5
                        ,-1,CONCAT44(uVar14,0xffffffff),0,(undefined8 *)param_4,param_6);
        }
      }
    }
    else if (param_5->nTryBlocks != 0) {
      if (param_6 != 0) goto LAB_18000ca21;
      FUN_18000cf60(param_1,(longlong *)param_2,local_100,(ulonglong *)param_4,(ULONG_PTR)param_5,
                    iVar5);
    }
    lVar7 = FUN_18000babc();
    if (*(longlong *)(lVar7 + 0x38) == 0) {
      return;
    }
  }
LAB_18000ca21:
                    /* WARNING: Subroutine does not return */
  abort();
}

