
/* Address: 0x180001ff0; Evidence: ev_6eff75e4a40d83263e10740615fb9eaa80777fdcc8d1d8fd4e1aae7b0450247e */

void FUN_180001ff0(undefined8 param_1,undefined8 param_2)

{
  code *pcVar1;
  
  napi_fatal_error(param_1,0xffffffffffffffff,param_2);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

