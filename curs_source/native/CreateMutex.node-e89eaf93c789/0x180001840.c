
/* Address: 0x180001840; Evidence: ev_f074d2875895e66170189bf900a1e02d8957f1a6aad500f4838b310fd747b063 */

void FUN_180001840(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

