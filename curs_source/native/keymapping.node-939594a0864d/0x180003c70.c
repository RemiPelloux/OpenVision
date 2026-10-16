
/* Address: 0x180003c70; Evidence: ev_20be933732b106d9b04b8fcea0057d372fe82ca38fa833d10bece73530be23bc */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

int FUN_180003c70(longlong *param_1)

{
  longlong *plVar1;
  longlong lVar2;
  int iVar3;
  
  LOCK();
  plVar1 = param_1 + 2;
  lVar2 = *plVar1;
  *(int *)plVar1 = (int)*plVar1 + -1;
  UNLOCK();
  iVar3 = (int)lVar2 + -1;
  if ((iVar3 == 0) && (param_1 != (longlong *)0x0)) {
    (**(code **)(*param_1 + 0x20))(param_1,1);
  }
  return iVar3;
}

