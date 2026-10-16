
/* Address: 0x180008da4; Evidence: ev_224f9337f04ba331214bbdfe658c85950ccc8f46cc8099aa17cb022cef45b6ec */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

undefined8
FUN_180008da4(int *param_1,__uint64 *param_2,ULONG_PTR param_3,_xDISPATCHER_CONTEXT *param_4,
             FuncInfo4 *param_5,int param_6,undefined8 param_7,byte param_8)

{
  int iVar1;
  longlong lVar2;
  undefined8 uVar3;
  uint uVar4;
  uint uVar5;
  code *pcVar6;
  undefined8 in_stack_ffffffffffffff98;
  undefined4 uVar7;
  undefined8 in_stack_ffffffffffffffa0;
  undefined4 uVar8;
  uint local_48 [12];
  
  uVar7 = (undefined4)((ulonglong)in_stack_ffffffffffffff98 >> 0x20);
  uVar8 = (undefined4)((ulonglong)in_stack_ffffffffffffffa0 >> 0x20);
  __except_validate_context_record(param_3);
  lVar2 = FUN_180006ed8();
  uVar5 = 0;
  if ((*(int *)(lVar2 + 0x40) == 0) && (*param_1 != -0x1f928c9d)) {
    if (*param_1 == -0x7fffffd7) {
      if (param_1[6] == 0xf) {
        if (*(longlong *)(param_1 + 0x18) == 0x19930520) goto LAB_180008e26;
        goto LAB_180008e18;
      }
    }
    else {
LAB_180008e18:
      if (*param_1 == -0x7fffffda) goto LAB_180008e26;
    }
    if (((byte)*param_5 & 0x20) != 0) {
      return 1;
    }
  }
LAB_180008e26:
  if ((*(byte *)(param_1 + 1) & 0x66) == 0) {
    FUN_18000912c(local_48,(longlong)param_5,*(longlong *)(param_4 + 8));
    if ((local_48[0] == 0) && (((byte)*param_5 & 0x40) == 0)) {
      return 1;
    }
    if ((*param_1 == -0x1f928c9d) &&
       (((2 < (uint)param_1[6] && (0x19930522 < (uint)param_1[8])) &&
        (iVar1 = *(int *)(*(longlong *)(param_1 + 0xc) + 8), iVar1 != 0)))) {
      lVar2 = FUN_180006764();
      pcVar6 = (code *)(lVar2 + iVar1);
      if (pcVar6 != (code *)0x0) {
        uVar3 = (*pcVar6)(param_1,param_2,param_3,param_4,param_5,param_6,param_7,
                          CONCAT44(uVar8,(uint)param_8));
        return uVar3;
      }
    }
    FUN_180007e58(param_1,(longlong *)param_2,param_3,(ulonglong *)param_4,(byte *)param_5,param_8,
                  CONCAT44(uVar7,param_6),param_7);
    return 1;
  }
  if (*(int *)(param_5 + 8) == 0) {
    return 1;
  }
  uVar4 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
  if (*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
               (-4 - (longlong)(char)(&DAT_180015590)[uVar4])) >> ((&DAT_1800155a0)[uVar4] & 0x1f)
      == 0) {
    return 1;
  }
  if (param_6 != 0) {
    return 1;
  }
  if ((*(byte *)(param_1 + 1) & 0x20) == 0) {
LAB_180008f4b:
    __FrameHandler4::FrameUnwindToEmptyState(param_2,param_4,param_5);
  }
  else {
    if (*param_1 == -0x7fffffda) {
      iVar1 = FUN_180007144((longlong)param_5,(longlong)param_4,*(ulonglong *)(param_4 + 0x20));
      if (iVar1 < -1) {
LAB_18000904c:
                    /* WARNING: Subroutine does not return */
        abort();
      }
      if (*(int *)(param_5 + 8) != 0) {
        uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf;
        uVar5 = *(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                         (-4 - (longlong)(char)(&DAT_180015590)[uVar5])) >>
                ((&DAT_1800155a0)[uVar5] & 0x1f);
      }
      if ((int)uVar5 <= iVar1) goto LAB_18000904c;
    }
    else {
      if (*param_1 != -0x7fffffd7) goto LAB_180008f4b;
      iVar1 = param_1[0xe];
      if ((iVar1 < -1) ||
         (uVar5 = *(byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) & 0xf,
         (int)(*(uint *)((byte *)(*(longlong *)(param_4 + 8) + (longlong)*(int *)(param_5 + 8)) +
                        (-4 - (longlong)(char)(&DAT_180015590)[uVar5])) >>
              ((&DAT_1800155a0)[uVar5] & 0x1f)) <= iVar1)) goto LAB_18000904c;
      param_2 = *(__uint64 **)(param_1 + 10);
    }
    FUN_180009a80((longlong *)param_2,(ulonglong *)param_4,(longlong)param_5,iVar1);
  }
  return 1;
}

