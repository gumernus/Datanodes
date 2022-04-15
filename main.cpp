#include <dpp/dpp.h>
#include <string>

std::string convertToString(char* a)
{
	std::string s = a;
    return s;
}
 
int main()
{
	uint64_t intents = dpp::i_default_intents | dpp::i_message_content;
    dpp::cluster bot("token", intents);
	bot.on_log(dpp::utility::cout_logger());
    dpp::commandhandler command_handler(&bot);
    command_handler.add_prefix(".").add_prefix("/");
 
    bot.on_ready([&command_handler, &bot](const dpp::ready_t &event) {
 
        command_handler.add_command(
            "test",
            {
				{"first", dpp::param_info(dpp::pt_string, true, "idk") }, // if true == non-optional
				{"second", dpp::param_info( dpp::pt_string, true, "lmao") },
				{"third", dpp::param_info( dpp::pt_string, true, "xd")}
			},
 
            [&command_handler, &bot](const std::string& command, const dpp::parameter_list_t& parameters, dpp::command_source src) {
                std::string got_param;
                if (!parameters.empty()) {
                    got_param = std::get<std::string>(parameters[0].second);
                }
                command_handler.reply(dpp::message("Pogisek -> " + got_param), src);
				bot.message_create(dpp::message(825466224208379974,convertToString("<@") + std::to_string(src.issuer.id) + convertToString("> je gay xddd"))); // send mention to channel

            },"test commandík",825457047025221682
        );
 
        command_handler.register_commands();

		std::cout << "BOT IS RUNNING" << "\n";
 
    });
 
    bot.start(false);
 
    return 0;
}
