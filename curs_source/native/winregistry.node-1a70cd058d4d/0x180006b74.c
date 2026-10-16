
/* Address: 0x180006b74; Evidence: ev_b9d787d2ce27b24ae1b808fd4e162075670083cf3063f3c83fa1dd2514800cf1 */

/* Library Function - Multiple Matches With Same Base Name
    void __cdecl uninitialize_environment_internal<char>(char * __ptr64 * __ptr64 & __ptr64)
    void __cdecl uninitialize_environment_internal<wchar_t>(wchar_t * __ptr64 * __ptr64 & __ptr64)
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

void uninitialize_environment_internal<>(undefined8 *param_1)

{
  if ((undefined8 *)*param_1 != DAT_18001c390) {
    free_environment<>((undefined8 *)*param_1);
  }
  return;
}

