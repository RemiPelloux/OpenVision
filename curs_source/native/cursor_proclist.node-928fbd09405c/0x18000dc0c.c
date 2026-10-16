
/* Address: 0x18000dc0c; Evidence: ev_8adcd54760add40d086a3f68a760183f9025e9d0fe3c0121d7b486afbde916f9 */

ulonglong FUN_18000dc0c(int *param_1,__uint64 *param_2,ULONG_PTR param_3,
                       _xDISPATCHER_CONTEXT *param_4,FuncInfo4 *param_5,int param_6,
                       undefined8 param_7,byte param_8)

{
  ulonglong uVar1;
  longlong lVar2;
  
  uVar1 = FUN_18000d95c(param_1,param_2,param_3,param_4,param_5,param_6,param_7,param_8);
  lVar2 = FUN_18000babc();
  *(undefined4 *)(lVar2 + 0x78) = 0xfffffffe;
  return uVar1 & 0xffffffff;
}

