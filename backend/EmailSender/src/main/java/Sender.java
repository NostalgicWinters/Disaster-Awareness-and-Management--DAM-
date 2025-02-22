import java.util.List;

public class Sender {
    public static void main(String[] args) {
        try {
            // Fetch Email from MongoDB Atlas
            List<String> emails = SendMailWithAttachment.fetchEmailsFromMongoDB();
            
            // Create a single instance of SendMailWithAttachment
            SendMailWithAttachment sendMailWithAttachment = new SendMailWithAttachment();

            // Send email to each user
            for (String email : emails) {
                sendMailWithAttachment.send(email);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
